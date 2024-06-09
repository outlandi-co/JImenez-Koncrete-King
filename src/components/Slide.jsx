<Slide>
  {slideImages.map((each, index) => (
    <div key={index} className="each-slide">
      <div style={{ 'backgroundImage': `url(${each})` }}>
        <span>Slide {index + 1}</span>
      </div>
    </div>
  ))}
</Slide>
