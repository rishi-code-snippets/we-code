'use client';

import { useEffect, useState } from "react";
import ComponentPreview from "./ComponentPreview";


const ComponentPreviews = () => {
    const [components, setComponents] = useState();

    const getComponents = async () => {
        try{
            const components = await fetch("https://we-code-blog.netlify.app", {
                cache: "no-store",
            });
    
            if(!components.ok){
                console.log("failed", response.status, response.statusText);
                throw new Error("Failed to fetch components");
            }

            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('application/json')) {
                console.error("Expected JSON, but got:", contentType);
                throw new TypeError("Expected JSON, but got " + contentType);
            }
    
            return components.json();
        }catch(error){
            console.log("Error in fetching components: ", error); 
        }
    }
        
    useEffect(() => {
        const loadComponents = async () => {
            const fetchedComponents = await getComponents();
            setComponents(fetchedComponents);
        };

        loadComponents();
    }, []);

    return (
        <div className="flex-1 flex flex-col relative">
            <div className="component-previews grid gap-6 md:gap-8">
                {
                    components ? 
                    components.map(component => <ComponentPreview key={component['_id']} {...component}/>) 
                    : <div className="component-preview relative">
                        <p>Loading</p>
                    </div>
                }
            </div>
        </div>
    );
}

export default ComponentPreviews;
