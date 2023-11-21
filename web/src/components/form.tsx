import { useState } from "react";

export function Form() {
    const [isLoading, setLoading] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    const [isScreensChecked, setIsScreensChecked] = useState(false);
    const [isChairsChecked, setIsChairsChecked] = useState(false);

    const generateID = () => {
        const randomNumber = Math.floor(Math.random() * 1000000); // Generates a random number between 0 and 999999.
        return `#czh-${randomNumber}`;
    };

    // Handles the submit event on form submit.
    const handleSubmit = async (event: any) => {

        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
        setLoading(true);

        // Get data from the form.
        const data = {
            space: event.target.space.value,
            amount: event.target.amount.value,
            date: event.target.date.value,
            startTime: event.target.startTime.value,
            endTime: event.target.endTime.value,
            name: event.target.name.value,
            email: event.target.email.value,
            organisation: event.target.organisation.value,
            notes: event.target.notes.value,
            // options
            lunch: event.target.lunch.checked,
            coffee: event.target.coffee.checked,
            cheers: event.target.cheers.checked,
            screens: event.target.screens.checked,
            chairs: event.target.chairs.checked,
            screensAmount: event.target.screensAmount?.value || 0,
            chairsAmount: event.target.chairsAmount?.value || 0,
            id: generateID(),
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
                amount: data.amount,
                date: data.date,
                startTime: data.startTime,
                endTime: data.endTime,
                name: data.name,
                email: data.email,
                organisation: data.organisation,
                notes: data.notes,
                lunch: data.lunch,
                coffee: data.coffee,
                cheers: data.cheers,
                screens: data.screens,
                chairs: data.chairs,
                screensAmount: data.screensAmount,
                chairsAmount: data.chairsAmount,
                id: data.id
            }) // modify this according to your need
        }

        // Send the email
        const emailResponse = await fetch(emailEndpoint, emailOptions)
        const emailResult = await emailResponse.json()

        if (emailResponse.status === 200) {
            console.log('Email sent successfully:', emailResult);
            setLoading(false);
            setSubmitted(true);

            // Reset to default state after 5 seconds
            setTimeout(() => {
                setSubmitted(false);
            }, 5000);

        } else {
            console.error('Error sending email:', emailResult);
            setLoading(false);
        }
        return result
    }

    const inputClasses = ` font-sansRegular text-lg py-2 px-4 w-full border border-darkGrey hover:border-darkBlue focus:outline focus:outline-darkBlue text-darkBlue rounded-[4px] placeholder:text-darkGrey/75`

    return (

        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <label htmlFor="space" className="text-darkBlue flex flex-col gap-2 -mb-2">Ruimte</label>
            <select required name="space" id="space" className={inputClasses}>
                <option value="Atelier">Atelier - 20 personen</option>
                <option value="Landschapszaal">Landschapszaal - 60 personen</option>
                <option value="Co-creatie">Co-creatie - 40 personen</option>
            </select>
            <div className="w-full flex flex-col gap-2">
                <p className="text-darkBlue flex flex-col gap-2">Datum</p>
                <input required type="date" id="date" name="date" placeholder="Date" className={inputClasses} />
            </div>
            <div className="flex w-full justify-between gap-4">
                <div className="w-full flex flex-col gap-2">
                    <p className="text-darkBlue flex flex-col gap-2">Start tijd</p>
                    <input required type="time" id="startTime" name="startTime" placeholder="Start tijd" className={inputClasses} />
                </div>
                <div className="w-full flex flex-col gap-2">
                    <p className="text-darkBlue ">Eind tijd</p>
                    <input required type="time" id="endTime" name="endTime" placeholder="Eind tijd" className={inputClasses} />
                </div>
            </div>
            <input required type="number" max={60} id="amount" name="amount" placeholder="Aantal personen" className={inputClasses} />
            <p className="text-darkBlue flex flex-col gap-2">Opties voor uw boeking</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="lunch" name="lunch" className="w-5 h-5 border border-darkGrey rounded-[4px] checked:bg-green cursor-pointer" />
                    <label htmlFor="lunch" className="text-lg font-sansRegular text-darkBlue cursor-pointer">Lunch</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="coffee" name="coffee" className="w-5 h-5 border border-darkGrey rounded-[4px] checked:bg-green cursor-pointer" />
                    <label htmlFor="coffee" className="text-lg font-sansRegular text-darkBlue cursor-pointer">Koffie & gebak</label>
                </div>
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="cheers" name="cheers" className="w-5 h-5 border border-darkGrey rounded-[4px] checked:bg-green cursor-pointer" />
                    <label htmlFor="cheers" className="text-lg font-sansRegular text-darkBlue cursor-pointer">Borrel</label>
                </div>
                <div className="flex items-center gap-2">
                    <input checked={isScreensChecked}
                        onChange={(e) => setIsScreensChecked(e.target.checked)} type="checkbox" id="screens" name="screens" className="w-5 h-5 border border-darkGrey rounded-[4px] checked:bg-green cursor-pointer" />
                    <label htmlFor="screens" className="text-lg font-sansRegular text-darkBlue cursor-pointer">Schermen</label>
                </div>
                <div className="flex items-center gap-2 ">
                    <input checked={isChairsChecked}
                        onChange={(e) => setIsChairsChecked(e.target.checked)} type="checkbox" id="chairs" name="chairs" className="w-5 h-5 border border-darkGrey rounded-[4px] checked:bg-green cursor-pointer" />
                    <label htmlFor="chairs" className="text-lg font-sansRegular text-darkBlue cursor-pointer">Stoelen</label>
                </div>
            </div>
            {isScreensChecked ?
                <input required type="number" max={60} id="screensAmount" name="screensAmount" placeholder="Aantal schermen" className={inputClasses} />
                : null
            }
            {isChairsChecked ?
                <input required type="number" max={60} id="chairsAmount" name="chairsAmount" placeholder="Aantal stoelen" className={inputClasses} />
                : null
            }
            <p className="text-darkBlue flex flex-col gap-2">Uw gegevens</p>
            <input required type="text" id="name" name="name" placeholder="Naam" className={inputClasses} />
            <input required type="text" id="email" name="email" placeholder="E-mail" className={inputClasses} />
            <input required type="text" id="organisation" name="organisation" placeholder="Organisatie" className={inputClasses} />
            <textarea name="notes" id="notes" placeholder="Opmerkingen" className={inputClasses} />
            <input type="submit" className={`${isLoading ? `bg-darkBlue opacity-50` : isSubmitted ? `bg-green opacity-100` : `bg-darkBlue text-white hover:bg-[#16113B] active:bg-[#222222]`}  hover:scale-105 active:scale-100 transition-all w-full text-white rounded-md py-2 px-4 text-center cursor-pointer`} value={isLoading ? `Versturen...` : isSubmitted ? `Aanvraag verstuurd!` : `Verstuur aanvraag`} />
        </form>
    )
}