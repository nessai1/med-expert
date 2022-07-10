export default function VisualisationResultFrame({frameState})
{
    const styles = {
        color: '#000000',
        backgroundColor: '#ffffff',
        fontSize: '26px',
    };
    styles.opacity = `${frameState.opacity}%`;

    return (
        <div style={styles}>
            Измените значение прозрачности что-бы увидеть изменение состояния контента
        </div>
    );
}