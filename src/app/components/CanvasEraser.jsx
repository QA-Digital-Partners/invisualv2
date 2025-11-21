import React, { useState, useEffect, useRef, useCallback } from "react";

function CanvasEraser({ baseSrc, topSrc, brush = 60, resetKey }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const topImgRef = useRef(null);
  const baseImgRef = useRef(null);
  const isDrawing = useRef(false);
  const lastPoint = useRef({ x: 0, y: 0 });
  const [imagesLoaded, setImagesLoaded] = useState(false);


  useEffect(() => {
    const topImg = topImgRef.current;
    const baseImg = baseImgRef.current;

    if (!topImg || !baseImg) return;

    let topLoaded = false;
    let baseLoaded = false;

    const checkBothLoaded = () => {
      if (topLoaded && baseLoaded) {
        setImagesLoaded(true);
        initCanvas();
      }
    };

    const onTopLoad = () => {
      topLoaded = true;
      checkBothLoaded();
    };

    const onBaseLoad = () => {
      baseLoaded = true;
      checkBothLoaded();
    };

    if (topImg.complete && baseImg.complete) {
      setImagesLoaded(true);
      initCanvas();
    } else {
      topImg.onload = onTopLoad;
      baseImg.onload = onBaseLoad;
    }

    return () => {
      topImg.onload = null;
      baseImg.onload = null;
    };
  }, [topSrc, baseSrc]);

  const getPointerPos = (e, rect, ratio) => {
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * ratio,
      y: (clientY - rect.top) * ratio,
    };
  };

  const drawCircle = (ctx, x, y, size) => {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const drawLine = (ctx, x1, y1, x2, y2, size) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    const steps = Math.max(Math.ceil(dist / (size / 2)), 1);
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const x = x1 + dx * t;
      const y = y1 + dy * t;
      drawCircle(ctx, x, y, size);
    }
  };

  const initCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const topImg = topImgRef.current;
    const baseImg = baseImgRef.current;

    if (!container || !canvas || !topImg || !baseImg || !imagesLoaded) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    // Establecer dimensiones del canvas
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    // Limpiar canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la imagen superior (la que se va a borrar)
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(topImg, 0, 0, canvas.width, canvas.height);

    // Configurar para borrado
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
  }, [imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded) {
      initCanvas();
    }
  }, [initCanvas, resetKey, imagesLoaded]);

  // Event listeners para dibujar
  useEffect(() => {
    if (!imagesLoaded) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const dpr = window.devicePixelRatio || 1;

    const handlePointerDown = (e) => {
      isDrawing.current = true;
      const rect = container.getBoundingClientRect();
      const pos = getPointerPos(e, rect, dpr);
      lastPoint.current = pos;
      const ctx = canvas.getContext("2d");
      drawCircle(ctx, pos.x, pos.y, brush * dpr);
      e.preventDefault();
    };

    const handlePointerMove = (e) => {
      if (!isDrawing.current) return;
      const rect = container.getBoundingClientRect();
      const pos = getPointerPos(e, rect, dpr);
      const ctx = canvas.getContext("2d");
      drawLine(
        ctx,
        lastPoint.current.x,
        lastPoint.current.y,
        pos.x,
        pos.y,
        brush * dpr
      );
      lastPoint.current = pos;
      e.preventDefault();
    };

    const stop = () => {
      isDrawing.current = false;
    };

    canvas.addEventListener("mousedown", handlePointerDown);
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("mouseup", stop);

    canvas.addEventListener("touchstart", handlePointerDown, {
      passive: false,
    });
    window.addEventListener("touchmove", handlePointerMove, { passive: false });
    window.addEventListener("touchend", stop);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousedown", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("mouseup", stop);
      canvas.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", stop);
    };
  }, [brush, imagesLoaded]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ minHeight: 0 }}
    >
      <img
        ref={baseImgRef}
        src={baseSrc}
        alt=""
        className="w-full block"
        draggable={false}
      />

      <img
        ref={topImgRef}
        src={topSrc}
        alt=""
        style={{ display: "none" }}
        draggable={false}
      />

      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-full h-full"
        style={{ touchAction: "none", cursor: "crosshair" }}
      />
    </div>
  );
}

export default CanvasEraser;
