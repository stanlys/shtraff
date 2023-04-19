import { IFormik } from "../interface";
import * as Yup from "yup";

export const INITIAL_IFORMIK: IFormik = {
    name: "",
    days: "",
    email: "",
    credit: "",
    orgname: "",
    orgINN: "",
    orgKPP: "",
    orgOGRN: "",
    orgAddress: "",
    emails: [""],
    keyValues: [],
    scores: [{ name: "", BIK: "", korrscore: "", number: "" }],
    defaultScore: 0,
};

export const formValidate = Yup.object().shape({
    name: Yup.string().required("Обязательно к заполнению"),
    days: Yup.number().moreThan(0, "Больше нуля").required("Обязательно к заполнению"),
    email: Yup.string().email("Введите Email").required("Обязательно к заполнению"),
    credit: Yup.string().required("Обязательно к заполнению"),
    orgname: Yup.string().required("Обязательно к заполнению"),
    orgINN: Yup.string().required("Обязательно к заполнению").min(7),
    orgKPP: Yup.string().required("Обязательно к заполнению"),
    orgOGRN: Yup.string().required("Обязательно к заполнению"),
    orgAddress: Yup.string().required("Обязательно к заполнению"),
    emails: Yup.array().of(Yup.string().email("Введите Email").required("Обязательно к заполнению")),
    scores: Yup.array().of(
        Yup.object().shape({
            name: Yup.string().required("Обязательно к заполнению"),
            number: Yup.string().required("Обязательно к заполнению"),
            BIK: Yup.string().required("Обязательно к заполнению"),
            korrscore: Yup.string().required("Обязательно к заполнению"),
        })
    ),
    keyValues: Yup.array(),
});
