import React, { useState } from "react";
import { Space, Input, Typography, Switch, Button, Divider, SwitchProps } from "antd";
import { IFormik, ISubFormProps } from "./interface";
import { ErrorMessage, FieldArray } from "formik";
import style from "./../../styles/Bank.module.css";
import { getInputStatus } from "./helpers";
const { Text } = Typography;

const ComponentBank: React.FC<ISubFormProps> = ({ errors, values, handleChange, touched }) => {
    const [activeCheckbox, setActiveCheckbox] = useState<number>(0);

    return (
        <Space direction="vertical" style={{ width: "30rem" }}>
            <FieldArray name="scores">
                {(fielsProp) => {
                    const { form, push, remove } = fielsProp;
                    const values = form.values as IFormik;

                    return (
                        <>
                            {values.scores.map((score, index) => (
                                <Space
                                    direction="vertical"
                                    key={`score${index}`}
                                    style={{ width: "30rem", marginTop: "10px" }}
                                >
                                    {index != 0 && (
                                        <div style={{ display: "flex", justifyContent: "end" }}>
                                            <Button
                                                type="dashed"
                                                danger
                                                style={{ justifyContent: "start" }}
                                                onClick={() => {
                                                    if (index === activeCheckbox) setActiveCheckbox(0);
                                                    remove(index);
                                                }}
                                            >
                                                - Удалить счет
                                            </Button>
                                        </div>
                                    )}
                                    <Text>Название счета</Text>
                                    <Input
                                        size="large"
                                        name={`scores[${index}].name`}
                                        value={score.name}
                                        status={getInputStatus(errors, `scores[${index}].number`)}
                                        onChange={handleChange}
                                        placeholder="Название счета"
                                    />
                                    <Text type="danger">
                                        <ErrorMessage name={`scores[${index}].name`}></ErrorMessage>
                                    </Text>
                                    <label>Номер счет</label>
                                    <Input
                                        size="large"
                                        name={`scores[${index}].number`}
                                        value={score.number}
                                        status={getInputStatus(errors, `scores[${index}].number`)}
                                        onChange={handleChange}
                                        placeholder="Номер счет"
                                    />
                                    <Text type="danger">
                                        <ErrorMessage name={`scores[${index}].number`}></ErrorMessage>
                                    </Text>
                                    <Text>БИК счета </Text>
                                    <Input
                                        size="large"
                                        name={`scores[${index}].BIK`}
                                        value={score.BIK}
                                        status={getInputStatus(errors, `scores[${index}].BIK`)}
                                        onChange={handleChange}
                                        placeholder="Корр. номер счета"
                                    />
                                    <Text type="danger">
                                        <ErrorMessage name={`scores[${index}].BIK`}></ErrorMessage>
                                    </Text>
                                    <Text>Корр. номер счета</Text>
                                    <Input
                                        size="large"
                                        name={`scores[${index}].korrscore`}
                                        status={getInputStatus(errors, `scores[${index}].korrscore`)}
                                        value={score.korrscore}
                                        onChange={handleChange}
                                        placeholder=""
                                    />
                                    <Text type="danger">
                                        <ErrorMessage name={`scores[${index}].korrscore`}></ErrorMessage>
                                    </Text>
                                    <label>Дефолтный счет</label>
                                    <Switch
                                        checked={index === activeCheckbox}
                                        className={style.disable_switch}
                                        onClick={() => {
                                            setActiveCheckbox(index);
                                            form.setFieldValue("defaultScore", index);
                                        }}
                                    />
                                </Space>
                            ))}
                            <Divider></Divider>
                            <Button
                                type="dashed"
                                block
                                onClick={() => push({ name: "", number: "", BIK: "", korrscore: "" })}
                            >
                                + Добавить еще счет
                            </Button>
                        </>
                    );
                }}
            </FieldArray>
        </Space>
    );
};

export default ComponentBank;
