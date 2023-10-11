import { useState } from "react";

export function Form() {
    const [isLoading, setLoading] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {

        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        setLoading(true);

        // Get data from the form.
        const data = {
            space: event.target.space.value,
            date: event.target.date.value,
            startTime: event.target.startTime.value,
            endTime: event.target.endTime.value,
            name: event.target.name.value,
            email: event.target.email.value,
            organisation: event.target.organisation.value,
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/form'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()

        // Set the email endpoint
        const emailEndpoint = '/api/send'

        // Set the email request options
        const emailOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                space: data.space,
                date: data.date,
                startTime: data.startTime,
                endTime: data.endTime,
                name: data.name,
                email: data.email,
                organisation: data.organisation,
            }) // modify this according to your need
        }

        // Send the email
        const emailResponse = await fetch(emailEndpoint, emailOptions)
        const emailResult = await emailResponse.json()

        if (emailResponse.status === 200) {
            console.log('Email sent successfully:', emailResult);
            setLoading(false);
            setSubmitted(true);
        } else {
            console.error('Error sending email:', emailResult);
            setLoading(false);
        }
        return result
    }

    return (

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <select required name="space" id="space" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50">
                <option value="" selected disabled hidden>Kies een ruimte</option>
                <option value="Entree">Entree</option>
                <option value="Volgo">Ontmoetplein</option>
                <option value="Atelier">Atelier</option>
                <option value="Landschapszaal">Landschapszaal</option>
                <option value="Co-creatie">Co-creatie</option>
            </select>
            <div className="w-full flex flex-col gap-2">
                <p className="text-blue/75 flex flex-col gap-2">Datum</p>
                <input required type="date" id="date" name="date" placeholder="Date" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            </div>
            <div className="flex w-full justify-between gap-4">
                <div className="w-full flex flex-col gap-2">
                    <p className="text-blue/75 flex flex-col gap-2">Start tijd</p>
                    <input required type="time" id="startTime" name="startTime" placeholder="Start tijd" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="text-blue/75 ">Eind tijd</p>
                    <input required type="time" id="endTime" name="endTime" placeholder="Eind tijd" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
                </div>
            </div>
            <input required type="text" id="name" name="name" placeholder="Naam" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input required type="text" id="email" name="email" placeholder="E-mail" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input required type="text" id="organisation" name="organisation" placeholder="Organisatie" className="text-lg p-4 w-full bg-black/5 outline-none text-blue placeholder:text-blue/50" />
            <input type="submit" className="bg-blue hover:brightness-105 hover:scale-105 active:scale-100 active:brightness-90 transition-all w-full text-white rounded-md py-4 px-2 text-center cursor-pointer" value={'Verstuur aanvraag'} />
            {isLoading && <p className="text-blue/75 text-xl max-w-4xl text-center">Versturen...</p>}
            {isSubmitted && <p className="text-green text-xl max-w-4xl text-center">Aanvraag verstuurd!</p>}
        </form>



    )
}