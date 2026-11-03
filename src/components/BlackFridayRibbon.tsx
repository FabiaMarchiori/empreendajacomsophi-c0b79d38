const BlackFridayRibbon = () => (
  <div className="campaign-ribbon" role="region" aria-label="BLACK FRIDAY">
    <div className="campaign-ribbon-track" aria-hidden="true">
      {[0, 1].map((group) => (
        <div className="campaign-ribbon-group" key={group}>
          {Array.from({ length: 16 }, (_, index) => (
            <span key={index}>BLACK FRIDAY</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default BlackFridayRibbon;