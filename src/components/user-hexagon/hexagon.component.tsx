import "./style.css";


type Props = {
  avatar: string;
  bottomPosition?: string;
  leftPosition?: string;
  rightPosition?: string;
  topPosition?: string;
}

export const HexagonAvatar = (props: Props) => {
  const path : string = '../..' + props.avatar;
  return (
    <div className="hexagon hexagon2" style={{
      position: 'absolute',
      // bottom: '-200px',
      '--bottom': `${props.bottomPosition}`,
      '--left': `${props.leftPosition}`,
      '--right': `${props.rightPosition}`,
      '--top': `${props.topPosition}`,
    } as React.CSSProperties}>
      <div className="hexagon-in1">
        <div className="hexagon-in2" style={{
          backgroundImage: `url(${require('../../assets/' + props.avatar + '.png')})`
        } as React.CSSProperties}></div>
      </div>
    </div>

  );
};
