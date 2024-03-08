import React from 'react'
import { Input, Select } from 'components/ui'
import { inquiryStatus, inquiryType, marketingSource } from './data'
function StudyLead({ ...props }) {
    const { formik } = props;
    const { values, getFieldProps, setFieldValue } = formik;
    return (
        <div className='flex flex-col gap-4 h-full overflow-auto'>
            <p className="font-medium text-black dark:text-white text-sm">General Info</p>
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8'>
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('given_name')}
                    placeholder="Given name"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('last_name')}
                    placeholder="Last name"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('phone_number')}
                    placeholder="#"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('email')}
                    placeholder="@"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('address')}
                    placeholder="address"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('bldg_number')}
                    placeholder="bldg#"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('city_region')}
                    placeholder="region/city"

                />
                <Input
                    size="sm"
                    className="text-center"
                    {...getFieldProps('post_code')}
                    placeholder="post code"

                />
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-4 gap-8 mt-4'>
                <div className='flex flex-col gap-4'>
                    <p className="font-medium text-black dark:text-white text-sm">Inquiry Status Info</p>
                    <Select
                        name="inquiry_status"
                        placeholder="Select Status"
                        size="sm"
                        onChange={(newValue) => setFieldValue("inquiry_status", newValue.value)}
                        options={[...inquiryStatus]}
                    />
                </div>
                <Select
                    name="inquiry_status"
                    placeholder="Select Type"
                    className="self-end"
                    size="sm"
                    onChange={(newValue) => setFieldValue("inquiry_type", newValue.value)}
                    options={[...inquiryType]}
                />
                <Input
                    size="sm"
                    className="self-end"
                    {...getFieldProps('follow_up_date')}
                    placeholder="follow Up date"

                />
                <div className='flex flex-col gap-4'>
                    <p className="font-medium text-black dark:text-white text-sm">Marketing</p>
                    <Select
                        name="marketing"
                        placeholder="Marketing Source"
                        size="sm"
                        onChange={(newValue) => setFieldValue("marketing_source", newValue.value)}
                        options={[...marketingSource]}
                    />
                </div>
                <div className='flex flex-col gap-4'>
                    <p className="font-medium text-black dark:text-white text-sm">Marketing</p>
                    <Select
                        name="marketing"
                        placeholder="Marketing Source"
                        size="sm"
                        onChange={(newValue) => setFieldValue("marketing_source", newValue.value)}
                        options={[...marketingSource]}
                    />
                </div>
            </div>
        </div>
    )
}

export default StudyLead