import Icon from "./Icon";

function Preview(props) {
  console.log("Preview -> props", props);
  const clasePalettes = `palette-${props.data.palette}`;

  return (
    <div className="divided__paquita">
      <section className="preview">
        <button className="reset js-reset" onClick={props.handleReset}>
          <i className="fa fa-trash-alt" aria-hidden="true" alt="trash-can"></i>
          Reset
        </button>
        <section className={`page js-card ${clasePalettes}`}>
          <div className="container">
            <div className="container__main-texts">
              <h2
                className={`container__main-texts--title jsnamepreview ${clasePalettes}`}
              >
                {props.data.name || "Paquita Salas"}
              </h2>
              <h3 className="container__main-texts--subtitle jsjobpreview">
                {props.data.job || "CEO PS Managment"}
              </h3>
            </div>
          </div>
          <div className="Page__container">
            {props.data.photo === "" ? (
              <div className="page__container--photo page__container--photo-default js-previewPhoto js-previewPhotoReset "></div>
            ) : (
                <div className="page__container--photo">
                  <img className="photoFix" src={props.data.photo} alt="" />
                </div>
              )}
          </div>
          <section className="page__icons">
            <Icon
              icon={"icon-phone"}
              iconLink={"fas fa-mobile-alt link"}
              alt={"icon-phone"}
              palette={clasePalettes}
              href={"tel:" + props.data.phone}
            />
            <Icon
              icon={"icon-mail"}
              iconLink={"far fa-envelope link"}
              alt={"icon-mail"}
              palette={clasePalettes}
              href={"mailto:" + props.data.email}
            />

            <Icon
              icon={"icon-linkedin"}
              iconLink={"fab fa-linkedin-in link"}
              alt={"icon-linkedin"}
              palette={clasePalettes}
              href={props.data.linkedin}
              href={
                props.data.linkedin.includes("https://linkedin.com/")
                  ? `${props.data.linkedin}`
                  : props.data.linkedin
                    ? `https://linkedin.com/in/${props.data.linkedin}`
                    : `https://linkedin.com`
              }
            />

            <Icon
              icon={"icon-github"}
              iconLink={"fab fa-github-alt link"}
              alt={"icon-github"}
              palette={clasePalettes}
              href={
                props.data.github.includes("https://github.com/")
                  ? `${props.data.github}`
                  : `https://github.com/${props.data.github}`
              }
            />
          </section>
        </section>
      </section>
    </div>
  );
}

export default Preview;
