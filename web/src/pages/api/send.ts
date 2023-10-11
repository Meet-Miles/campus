import type { NextApiRequest, NextApiResponse } from "next"
import { Resend } from "resend"
import { EmailTemplateUser } from "../../components/email"

const resend = new Resend("re_aKt1Tekz_FwqYSgnpxz36XyEtibE1ypNv")

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body
    try {
        const data = await resend.emails.send({
            from: "Campus Zuid-Holland <dev@wearemiles.nl>",
            to: [body.email],
            subject: `${body.id} - We hebben je aanvraag ontvangen!`,
            text: `Bedankt voor het sturen van je aanvraag!`,
            react: EmailTemplateUser({
                space: body.space,
                amount: body.amount,
                date: body.date,
                startTime: body.startTime,
                endTime: body.endTime,
                name: body.name,
                email: body.email,
                organisation: body.organisation,
                notes: body.notes,

                lunch: body.lunch,
                coffee: body.coffee,
                cheers: body.cheers,
                screens: body.screens,
                chairs: body.chairs,
                chairsAmount: body.chairsAmount,
                screensAmount: body.screensAmount,
                id: body.id,
                // generate ID and send with email #czh-123456
            }),
        })
        res.status(200).json(data)
    } catch (error) {
        res.status(400).json(error)
    }
}

// email to host, add button with mailtoL ... to accept booking and send email to user
