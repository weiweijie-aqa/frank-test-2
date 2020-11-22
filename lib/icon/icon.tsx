import React from 'react';
import './importIcons';
import './icon.scss';
import classes from '../helpers/classnames';

interface IconProps extends React.SVGAttributes<SVGElement> {
    name: string;
}

function xxx(){
    console.log("xxx");
}
console.log(xxx);
// 问题1,解决className的重复问题,(怕用户取个一样的覆盖掉)   解决办法:加个前缀,减小覆盖几率
const Icon: React.FC<IconProps> = ({className, name, ...restProps}) => {
    return (<svg className={classes('wwj_icon', className)} {...restProps}>
        <use xlinkHref={`#${name}`}/>
    </svg>);
};

export default Icon;

