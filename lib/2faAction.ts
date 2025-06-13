"use server";

export default async function twofaAction(
  _prevState: any,
  code: number
) {
  try {
    console.log(code)
  }
}