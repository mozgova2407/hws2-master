import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'


type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {
    const finalClassName =
        s.button +
        (xType === 'secondary'
            ? ' ' + s.secondary
            : xType === 'red'
                ? ' ' + s.red
                : ' ' + s.default) +
        (disabled ? ' ' + s.disabled : '') +
        (className ? ' ' + className : '')

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
