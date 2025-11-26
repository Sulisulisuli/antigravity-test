import React from "react";

export const BenefitCard = ({
    icon,
    heading,
    description,
}: {
    icon: { src: string; alt: string };
    heading: string;
    description: string;
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "2rem",
                borderRadius: "12px",
                backgroundColor: "var(--background-secondary, #f5f5f5)", // Fallback color
                fontFamily: "inherit",
                color: "inherit",
                height: "100%",
            }}
        >
            <div
                style={{
                    width: "48px",
                    height: "48px",
                    marginBottom: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={icon.src}
                    alt={icon.alt}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </div>
            <h3
                style={{
                    marginBottom: "0.75rem",
                    fontFamily: "inherit",
                    color: "inherit",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                }}
            >
                {heading}
            </h3>
            <p
                style={{
                    fontFamily: "inherit",
                    color: "inherit",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    opacity: 0.8,
                    margin: 0,
                }}
            >
                {description}
            </p>
        </div>
    );
};
