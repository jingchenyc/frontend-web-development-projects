import { useState, useEffect } from 'react';
import Button from './Button';

function TextPage() {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            const timer = setTimeout(() => setClicked(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [clicked]);

    return (
        <div className="text-page">
            <h1>Welcome to the Text Page</h1>
            <p>
                This page is designed to showcase how text-based content can be presented in a React application.
                Use this section to display introductory or informative content that is clear and concise.
            </p>

            <Button
                type="button"
                visual="link"
                onClick={() => setClicked(true)}
            >
                Go to Link
            </Button>
            {clicked && (
                <p className="feedback">
                    <span role="img" aria-label="success">✅</span> You clicked the button! Thank you for interacting with this page.
                </p>
            )}

            <section>
                <h2>Why Choose a Text Page?</h2>
                <p>
                    Text pages are ideal for delivering structured information, sharing detailed explanations, or providing instructions.
                    Here are a few key benefits:
                </p>
                <ul>
                    <li>Clear and simple presentation of information.</li>
                    <li>Highly customizable for various purposes.</li>
                    <li>Easy to integrate with other UI components.</li>
                </ul>
            </section>

            <section>
                <h2>How to Enhance Text Pages</h2>
                <p>
                    To make a text page more engaging, you can combine it with visual elements, such as images, icons, or interactive components like buttons.
                    Here are some tips:
                </p>
                <ol>
                    <li>
                        <strong>Use headings and subheadings:</strong> Break content into sections for better readability.
                    </li>
                    <li>
                        <strong>Leverage lists:</strong> Use bullet points or numbered lists to highlight key points.
                    </li>
                    <li>
                        <strong>Incorporate interactivity:</strong> Add buttons or links to guide users to other sections or pages.
                    </li>
                </ol>
            </section>

            <blockquote>
                <p>
                    "Good design is as little design as possible." – Dieter Rams
                </p>
            </blockquote>

            <footer>
                <p>
                    If you have any feedback or questions, feel free to contact us. We are here to help you make the most of your React applications.
                </p>
            </footer>
        </div>
    );
}

export default TextPage;
