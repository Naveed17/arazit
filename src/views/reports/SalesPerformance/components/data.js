

export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630' },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
]
export const StatisticData = {
    revenue: {
        value: 218.13,
        growShrink: 11.4,
        description: "leads converted into sales"
    },
    orders: {
        value: 175,
        growShrink: -3.2,
        description: "replied on Lead in Time"
    },

}
export const overviewData = {
    chart: {
        daily: {
            onGoing: 13,
            finished: 9,
            total: 21,
            series: [
                {
                    name: "Transferred",
                    data: [20, 19, 18, 14, 12, 10]
                },
                {
                    name: "Sales",
                    data: [1, 4, 8, 15, 16, 18]
                }
            ],
            range: ['6:00am', '9:00am', '12:00pm', '03:00pm', '06:00pm', '09:00pm']
        },
        weekly: {
            onGoing: 126,
            finished: 87,
            total: 213,
            series: [
                {
                    name: "Transferred",
                    data: [45, 52, 68, 84, 103, 112, 126]
                },
                {
                    name: "Sales",
                    data: [35, 41, 62, 62, 75, 81, 87]
                }
            ],
            range: ['21 Jan', '22 Jan', '23 Jan', '24 Jan', '25 Jan', '26 Jan', '27 Jan']
        },
        monthly: {
            onGoing: 270,
            finished: 113,
            total: 383,
            series: [
                {
                    name: "Transferred",
                    data: [28, 52, 91, 154, 227, 256, 270]
                },
                {
                    name: "Sales",
                    data: [22, 31, 74, 88, 97, 107, 113]
                }
            ],
            range: ['01 Jan', '05 Jan', '10 Jan', '15 Jan', '20 Jan', '25 Jan', '27 Jan']
        },
    }
}