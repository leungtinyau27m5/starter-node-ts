import { getMessage } from "@/module/user/user.controller";

console.log(getMessage());

// top level async
const response = await new Promise((resolve) => {
  resolve("waited");
});

console.log("response ", response);

console.log("end");
