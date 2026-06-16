import { SendEmail } from "@/helper/mailer";
import { connectToDb } from "@/lib/dbConnect";
import UserModel from "@/models/user.mode";
import { NextRequest, NextResponse } from "next/server";
import { v7 as uuidV7 } from "uuid";

export async function POST(request: NextRequest) {
  try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: "username, email and password is required!",
        },
        { status: 400 },
      );
    }

    await connectToDb();

    const existingUserByEmail = await UserModel.findOne({ email: email });
    const verifyCode = uuidV7();
    const verifyCodeExpiry = new Date(Date.now() + 3600000);
    if (existingUserByEmail) {
      if (existingUserByEmail.isVerified) {
        return NextResponse.json(
          {
            error: "user already exist please login",
          },
          {
            status: 400,
          },
        );
      } else {
        existingUserByEmail.username = username;
        existingUserByEmail.password = password;
        existingUserByEmail.verificationCode = verifyCode;
        existingUserByEmail.verifyCodeExpiry = verifyCodeExpiry;
        await existingUserByEmail.save();
      }
    } else {
      await UserModel.create({
        username,
        email,
        password,
        verificationCode: verifyCode,
        verifyCodeExpiry: verifyCodeExpiry,
        isVerified: false,
      });
    }

    const emailSenderFunctionResponse = await SendEmail({
      verifyCode,
      emailId: email,
      emailType: "VERIFY",
      userId: "",
      username,
    });

    if (emailSenderFunctionResponse?.accepted?.length > 0) {
      return NextResponse.json(
        {
          success: true,
          message:
            "Signup Success, Please check your email for verification code",
        },
        {
          status: 201,
        },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message:
            "User created but failed to send verification email. Please try again.",
        },
        {
          status: 500,
        },
      );
    }
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      {
        error: error,
      },
      {
        status: 500,
      },
    );
  }
}
