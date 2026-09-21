import styles from "./Area.module.css"
import React from "react"

const Area = ({
    titulo,
    tituloColor,
    videoBorderColor,
    btnColor,
    children,
}) => {
    const childrenArray = React.Children.toArray(children)

    return (
        <>
            {childrenArray.length > 0 && (
                <div className={styles.areaContainer}>
                    <h2 style={{ backgroundColor: tituloColor }}>{titulo}</h2>
                    <div className={styles.videoContainer}>
                        {childrenArray.map((child) =>
                            React.cloneElement(child, {
                                videoBorderColor,
                                btnColor,
                            })
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Area
