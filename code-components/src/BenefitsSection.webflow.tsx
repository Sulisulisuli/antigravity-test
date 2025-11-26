import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BenefitsSection } from "./BenefitsSection";

export default declareComponent(BenefitsSection, {
    name: "Benefits Section",
    group: "Sections",
    description: "A section with a heading, paragraph, and a large image.",
    props: {
        heading: props.Text({
            name: "Heading",
            defaultValue: "Unlock Your Potential",
        }),
        description: props.Text({
            name: "Description",
            defaultValue:
                "Experience the difference with our cutting-edge solution designed to elevate your workflow and drive results.",
            multiline: true,
        }),
        image: props.Image({
            name: "Image",
            defaultValue: "https://via.placeholder.com/1000x600",
        }),
    },
    options: {
        applyTagSelectors: true, // Enables global tag styles (h2, p) to affect this component
    },
});
