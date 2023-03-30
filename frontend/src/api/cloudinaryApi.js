// import axios from "axios";
// import { domain } from "../config";
// import { toast } from "react-toastify";

export const createUrlImage = async (file) => {
    try {
        // Save image in the cloudinary
        const CLOUDINARY_UPLOAD_PRESET = "qle01vei";
        const formData = new FormData();

        formData.append(`file`, file);

        formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);
        const CLOUDINARY_URL =
            "https://api.cloudinary.com/v1_1/drjynwuyt/upload";
        const detailImage = await fetch(CLOUDINARY_URL, {
            method: "POST",
            body: formData,
        }).then((data) => {
            return data.json();
        });

        return detailImage.url;
    } catch (error) {
        console.log(error);
    }
};
