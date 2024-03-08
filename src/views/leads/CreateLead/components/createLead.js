import React from 'react'
import { Loading } from 'components/shared'
import { Select, Input } from 'components/ui'
import { FormikProvider, useFormik, Form } from 'formik'
import { mainLeads } from './data'
import StudyLead from './studyLead'

function CreateLead() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {},
        onSubmit: (values) => { },

    })
    const { values, errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik;
    console.log(values);
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10 text-black dark:text-white text-base">Create New Lead</p>
                <FormikProvider value={formik}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-8 h-full">
                            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
                                <Select
                                    name="product"
                                    placeholder="Select Product"
                                    size="sm"
                                    onChange={(newValue) => setFieldValue("product", newValue.value)}
                                    options={mainLeads}
                                />
                            </div>
                            {values.product === "study_visa" && (
                                <StudyLead  {...{ formik }} />
                            )}

                        </div>
                    </Form>
                </FormikProvider>
            </Loading>
        </div>
    )
}

export default CreateLead