import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BenefitCard } from "./BenefitCard";

export default declareComponent(BenefitCard, {
    name: "Benefit Card",
    group: "Cards",
    description: "A card with an icon, heading, and description.",
    props: {
        icon: props.Image({
            name: "Icon",
            defaultValue: "https://via.placeholder.com/48",
        }),
        heading: props.Text({
            name: "Heading",
            defaultValue: "Benefit Title",
        }),
        description: props.Text({
            name: "Description",
            defaultValue:
                "Brief description of the benefit goes here. Keep it concise and impactful.",
            multiline: true,
        }),
    },
    options: {
        applyTagSelectors: true,
    },
});
