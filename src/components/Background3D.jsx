import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Yıldızlı alanı tanımlayan “StarField” adlı bir bileşen
function StarField() {
  const ref = useRef();

  // Rastgele konumlarda yıldız noktaları oluştur
  const positions = useMemo(() => {
    const count = 5000;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 1.5;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  // Yıldız kümesini sürekli döndür
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.1;
      ref.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <Points ref={ref}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.01} // İstersen 0.002 yapabilirsin
        sizeAttenuation
        depthWrite={false}
      />
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
    </Points>
  );
}

// Asıl bileşen: Canvas içerisine StarField yerleştirir
export default function Background3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 2] }} // Biraz uzak
        style={{
          background: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none", // Mouse etkileşimi kapansın istiyorsan
        }}
      >
        <StarField />
      </Canvas>
    </div>
  );
}
