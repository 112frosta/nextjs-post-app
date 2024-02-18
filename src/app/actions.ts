"use server";

import prisma from "../../prisma/client";
import { revalidatePath } from "next/cache";

export const getPosts = async () => {
  "use server";
  const posts = await prisma.post.findMany({});
  revalidatePath("/");
  return posts;
};

export const createPost = async (state: any, payload: FormData) => {
  const data = {
    author: payload.get("author")!.toString(),
    title: payload.get("title")!.toString(),
    content: payload.get("content")!.toString(),
  };

  await prisma.post.create({ data }).catch((err: unknown) => {
    return {
      message: "ERROR",
    };
  });

  return {
    message: "CREATED",
  };
};
