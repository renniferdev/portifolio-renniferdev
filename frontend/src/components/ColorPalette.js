import React, { useState } from 'react';

function ColorPalette() {
  const [isOpen, setIsOpen] = useState(false);

  const colors = [
    { name: 'Roxo', hue: 250, hex: '#7C3AED' },
    { name: 'Azul', hue: 200, hex: '#0EA5E9' },
    { name: 'Verde', hue: 120, hex: '#10B981' },
    { name: 'Rosa', hue: 330, hex: '#EC4899' },
    { name: 'Laranja', hue: 30, hex: '#F97316' },
    { name: 'Vermelho', hue: 0, hex: '#EF4444' },
  ];

  const changeColor = (hue) => {
    document.documentElement.style.setProperty('--hue-color', hue);
    localStorage.setItem('selectedHue', hue);
    setIsOpen(false);
  };

  return (
    <div className="color-palette">
      {isOpen && (
        <div className="color-palette__menu">
          {colors.map((color) => (
            <button
              key={color.hue}
              className="color-palette__item"
              style={{ backgroundColor: color.hex }}
              onClick={() => changeColor(color.hue)}
              title={color.name}
            >
              <span className="color-palette__tooltip">{color.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ColorPalette;
