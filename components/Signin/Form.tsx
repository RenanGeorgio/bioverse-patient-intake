"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import Content from './Content';
import './Form.module.css';


type Data = {
    name: string;
    email: string;
}

interface FormProps {
    onSubmit: (name: string, email: string) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    let control: string | number | readonly string[] | undefined = undefined;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        if (data) {
            const { name, email } = data;
            onSubmit(name, email);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev: Data | undefined) => ({
          ...prev as Data,
          [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        if (data) {
            const { name, email } = data;

            if ((name?.length > 0) && (email?.length > 0)) {
                setIsEnabled(true);
            } else {
                setIsEnabled(false);
            }
        } else {
            setIsEnabled(false);
        }
    },[data]);

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <Content handleChange={handleChange} currentData={data} control={control} />
                </div>
                <div className="w-full h-full p-5 bg-white shadow flex flex-col text-base">
                    <button
                        type="submit"
                        className="form-submit-button"
                        disabled={!isEnabled}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form;