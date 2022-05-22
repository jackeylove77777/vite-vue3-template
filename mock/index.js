
export default [
  {
    url: "/api/get",
    method: "get",
    response: () => {
      return {
        code: 200,
        message: "ok",
        data: ["tom", "jerry"],
      };
    },
  },
];