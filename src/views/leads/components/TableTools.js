import React from 'react'
import { Button, Input } from 'components/ui'
import { HiDownload, HiOutlineSearch } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const ProductTableTools = () => {
	const navigate = useNavigate()
	const handleCreate = () => {
		navigate('/app/leads/create-lead')
		window.scrollTo(0, 0)
	}


	return (
		<div className="flex flex-col lg:flex-row lg:items-center justify-end">
			<Button onClick={handleCreate} size="sm" shape="circle">
				Create Lead
			</Button>
			<Link
				className="block lg:inline-block md:mx-2 md:mb-0 mb-4"
				to="/data/product-list.csv"
				target="_blank"
				download
			>
				<Button
					block
					size="sm"
					icon={<HiDownload />}
				>
					Export
				</Button>
			</Link>
			<Input
				className="max-w-md md:w-52 md:mb-0 mb-4"
				size="sm"
				placeholder="Search"
				prefix={<HiOutlineSearch className="text-lg" />}

			/>
		</div>
	)
}

export default ProductTableTools