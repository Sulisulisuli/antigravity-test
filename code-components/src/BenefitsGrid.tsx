import React from "react";

export const BenefitsGrid = ({
    heading,
    description,
    children,
}: {
    heading: string;
    description: string;
    children: React.ReactNode;
}) => {
    return (
        <section
            style={{
                padding: "4rem 2rem",
                fontFamily: "inherit",
                color: "inherit",
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "3rem",
                        maxWidth: "800px",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}
                >
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
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: "2rem",
                        width: "100%",
                    }}
                >
                    {children}
                </div>
            </div>
        </section>
    );
};
