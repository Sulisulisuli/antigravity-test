import React from "react";

export const BenefitsSection = ({
    heading,
    description,
    image,
}: {
    heading: string;
    description: string;
    image: { src: string; alt: string };
}) => {
    return (
        <section
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                padding: "4rem 2rem",
                fontFamily: "inherit", // Inherit font from parent/body
                color: "inherit",      // Inherit color from parent/body
            }}
        >
            <div style={{ maxWidth: "800px", marginBottom: "3rem" }}>
                <h2
                    style={{
                        marginBottom: "1rem",
                        fontFamily: "inherit",
                        color: "inherit",
                    }}
                >
                    {heading}
                </h2>
                <p
                    style={{
                        fontSize: "1.125rem",
                        lineHeight: "1.6",
                        fontFamily: "inherit",
                        color: "inherit",
                        opacity: 0.9,
                    }}
                >
                    {description}
                </p>
            </div>

            <div
                style={{
                    width: "100%",
                    maxWidth: "1000px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                    }}
                />
            </div>
        </section>
    );
};
