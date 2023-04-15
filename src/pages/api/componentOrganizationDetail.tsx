import React from "react";
import { Space, Typography, Input, Button } from "antd";
import { Form, FormikConfig, Formik, FormikValues, useFormik, withFormik, FormikProps, Field } from "formik";

const { Text } = Typography;

// export interface ComponentOrganizationDetailProp {
//     formikRef: FormikConfig<FormikValues>;
// }
interface FormValues {
    orgname: "";
    orgINN: "";
    orgKPP: "";
    orgOGRN: "";
    orgAddress: "";
}

const ComponentOrganizationDetail = (props: FormikProps<FormValues>) => {
    // const formik = useFormik({
    //     initialValues: {
    //         orgname: "",
    //         orgINN: "",
    //         orgKPP: "",
    //         orgOGRN: "",
    //         orgAddress: "",
    //     },
    //     onSubmit: (values) => {
    //         console.log("Send", values);
    //     },
    // });

    const { isSubmitting } = props;
    return (
        <Form>
            <Space direction="vertical" style={{ width: "30rem" }}>
                <Text>Название организации</Text>
                <Field name="orgname"></Field>
                <Field name="orgINN"></Field>
                <Field name="orgKPP"></Field>
                <Field name="orgOGRN"></Field>
                <Field name="orgAddress"></Field>
                {/* <Input size="large" name="orgname" value={formik.values.orgname} onChange={formik.handleChange} />
                <label>ИНН организации</label>
                <Input size="large" />
                <label>КПП организации</label>
                <Input size="large" />
                <label>ОГРН организации</label>
                <Input size="large" />
                <label>Юридический адрес</label>
                <Input size="large" /> */}
                <button type="submit">send</button>
                <button type="reset">reset</button>
            </Space>
        </Form>
    );
};

const ORGForm = withFormik({
    mapPropsToValues: () => {
        return {
            orgname: "",
            orgINN: "",
            orgKPP: "",
            orgOGRN: "",
            orgAddress: "",
        };
    },
    handleSubmit: (values) => {
        console.log("dddd", values.orgname);
    },
})(ComponentOrganizationDetail);

export default ORGForm;

// export default ComponentOrganizationDetail;
