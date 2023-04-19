import { FormikErrors, getIn } from "formik";
import { IFormik } from "../interface";
import { InputStatus } from "antd/es/_util/statusUtils";

export const getInputStatus = (errors: FormikErrors<IFormik>, field: string): InputStatus => {
    return getIn(errors, field) ? "error" : "";
};
