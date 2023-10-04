import React from 'react'
import { Loading } from 'components/shared'
import { Select, Input } from 'components/ui'
import { FormikProvider, useFormik, Form } from 'formik'
import { colourOptions } from './components/data'

function CreateLead() {
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {},
        onSubmit: (values) => { },

    })
    const { values, errors, touched, handleSubmit, getFieldProps, setFieldValue } = formik;
    return (
        <div className="flex flex-col gap-4 h-full">
            <Loading loading={false}>
                <p className="font-semibold mb-10 text-black dark:text-white text-base">Create New Lead - Umrah</p>
                <FormikProvider value={formik}>
                    <Form noValidate onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-8 h-full">
                            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
                                <Select
                                    name="product"
                                    placeholder="Product"
                                    size="sm"
                                    onChange={(newValue) => setFieldValue("product", newValue.label)}
                                    options={colourOptions}
                                />
                            </div>
                            <h6 className='text-sm text-black/40'>
                                General Information
                            </h6>
                            <div className='grid grid-cols-1 xl:grid-cols-4 gap-4 xl:gap-8'>
                                <Input
                                    placeholder="Given Name"
                                    size="sm"
                                    {...getFieldProps("name")}
                                />
                                <Input
                                    placeholder="Surname"
                                    size="sm"
                                    {...getFieldProps("surName")}
                                />
                                <Input
                                    placeholder="Phone"
                                    size="sm"
                                    {...getFieldProps("phone")}
                                />
                                <Input
                                    type="email"
                                    placeholder="Email"
                                    size="sm"
                                    {...getFieldProps("email")}
                                />
                                <Input
                                    placeholder="Address"
                                    size="sm"
                                    {...getFieldProps("address")}
                                />
                                <Input
                                    placeholder="Bldg/Unit"
                                    size="sm"
                                    {...getFieldProps("bldg")}
                                />
                                <Input
                                    placeholder="Region"
                                    size="sm"
                                    {...getFieldProps("region")}
                                />
                                <Input
                                    placeholder="Postal Code"
                                    size="sm"
                                    {...getFieldProps("postalCode")}
                                />
                            </div>
                        </div>
                    </Form>
                </FormikProvider>
            </Loading>
        </div>
    )
}

export default CreateLead