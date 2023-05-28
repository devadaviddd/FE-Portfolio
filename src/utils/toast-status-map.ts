export const mapStatusToToast = (
  actionsStatus: "success" | "error"
) => {
  switch (actionsStatus) {
    case "success":
      return "success";
    case "error":
      return "error";
  }
};
