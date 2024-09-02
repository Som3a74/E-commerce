import React from 'react'

export default function RegisterFooter() {
    return (
        <>
            <div className="col-span-6">
                <label htmlFor="MarketingAccept" className="flex gap-4">
                    <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                    <span className="text-sm text-gray-700"> I want to receive emails about events, product updates and company announcements.</span>
                </label>
            </div>

            <div className="col-span-6">
                <p className="text-sm text-gray-500">By creating an account, you agree to our
                    <a href="#" className="text-gray-700 underline"> terms and conditions </a>and
                    <a href="#" className="text-gray-700 underline">privacy policy</a>.
                </p>
            </div>
        </>
    )
}
