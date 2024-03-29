
import React from 'react'
import { Timeline, Avatar, Badge, Card, Tag } from 'components/ui'
import { HiTag } from 'react-icons/hi'

const TimelineAvatar = ({ children, ...rest }) => {

    return (
        <Avatar
            {...rest}
            size={25}
            shape="circle"
        >
            {children}
        </Avatar>
    )
}

const TimeLine = () => {
    return (
        <div className="max-w-[700px]">
            <p className="font-semibold uppercase mb-5 text-xs">Sunday, 06 March</p>
            <Timeline>
                <Timeline.Item
                    media={
                        <TimelineAvatar className="bg-amber-500">C</TimelineAvatar>
                    }
                >
                    <p className="my-1 flex items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Carolyn Perkins </span>
                        <span className="mx-2">has change the status to </span>
                        <Badge className="bg-emerald-500" />
                        <span className="ml-1 rtl:mr-1 font-semibold text-gray-900 dark:text-gray-100">Completed</span>
                        <span className="ml-3 rtl:mr-3">6h ago</span>
                    </p>

                </Timeline.Item>
                <Timeline.Item
                    media={
                        <TimelineAvatar src="/img/avatars/thumb-3.jpg" className="bg-amber-500" />
                    }
                >
                    <p className="my-1 flex items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Ron Vargas</span>
                        <span className="mx-2">comment on your </span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Post</span>
                        <span className="ml-3 rtl:mr-3">2d ago</span>
                    </p>
                    <Card className="mt-4">
                        <p>
                            Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.
                        </p>
                    </Card>
                </Timeline.Item>
                <Timeline.Item
                    media={
                        <TimelineAvatar className="text-gray-700 bg-gray-200 dark:text-gray-100"><HiTag /></TimelineAvatar>
                    }
                >
                    <p className="flex items-center">
                        <span className="font-semibold text-gray-900 dark:text-gray-100">Joyce Freeman </span>
                        <span className="mx-2">added tags </span>
                        <Tag
                            className="mr-2 rtl:ml-2 cursor-pointer"
                            prefix
                            prefixClass="bg-rose-500"
                        >
                            Live Issue
                        </Tag>
                        <Tag
                            className="mr-2 rtl:ml-2 cursor-pointer"
                            prefix
                            prefixClass="bg-blue-600"
                        >
                            Backend
                        </Tag>
                        <span className="ml-3 rtl:mr-3">2d ago</span>
                    </p>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}

export default TimeLine
