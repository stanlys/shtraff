import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { ReactNode } from "react";

export interface DataNode {
    title: React.ReactNode;
    key: string;
    isLeaf?: boolean;
    component?: ReactNode;
    children?: DataNode[];
}

export interface IScore {
    name: string;
    number: string;
    BIK: string;
    korrscore: string;
}

export interface IForm {
    name: string;
    days: string;
    email: string;
    credit: string;
    orgname: string;
    orgINN: string;
    orgKPP: string;
    orgOGRN: string;
    orgAddress: string;
    emails: Array<string>;
}

export interface IKeyValues {
    key: string;
    value: string;
}

export interface IKeysArray {
    keyValues: Array<IKeyValues>;
}

export interface IFormik {
    name: string;
    days: string;
    email: string;
    credit: string;
    orgname: string;
    orgINN: string;
    orgKPP: string;
    orgOGRN: string;
    orgAddress: string;
    emails: string[];
    keyValues: IKeyValues[];
    scores: IScore[];
    defaultScore: number;
}

export interface ISubFormProps {
    values: FormikValues;
    errors: FormikErrors<IForm>;
    touched: FormikTouched<IForm>;
    handleChange: React.ChangeEventHandler;
}
