import { toast } from "react-toastify";

export const toastAddFavandCartNotify = (msg) => {
  toast.warn(msg, {
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    icon: false,
  });
};




