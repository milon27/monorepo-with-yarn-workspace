import { format } from "date-fns"

export const DateUtil = {
    getOnlyDate: (date: Date) => {
        return format(date, "dd-MMM-yyyy")
    },
    hello: (o: unknown) => {
        console.log(o)
    },
}
