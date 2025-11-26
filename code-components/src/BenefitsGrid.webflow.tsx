import { declareComponent } from "@webflow/react";
import { props } from "@webflow/data-types";
import { BenefitsGrid } from "./BenefitsGrid";

export default declareComponent(BenefitsGrid, {
    name: "Benefits Grid",
    group: "Sections",
    description: "A grid section with heading, description, and slots for child components (max 3 columns).",
    props: {
        heading: props.Text({
            name: "Heading",
            defaultValue: "Why Choose Us",
        }),
        description: props.Text({
            name: "Description",
            defaultValue:
                "Discover the key benefits that set us apart and help you achieve your goals.",
            multiline: true,
        }),
        children: props.Slot({
            name: "Grid Items",
            allowedComponents: ["BenefitCard"],
        }),
    },
    options: {
        applyTagSelectors: true,
    },
});
