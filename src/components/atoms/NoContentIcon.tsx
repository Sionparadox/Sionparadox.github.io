import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const NoContentIcon = () => {
  const controls = useAnimation();

  useEffect(() => {
    // 5초 후 텍스트 보이기 → pulse 반복
    const showText = setTimeout(() => {
      controls.start('visible');
      setTimeout(() => {
        controls.start('pulse');
      }, 500);
    }, 5000);

    return () => clearTimeout(showText);
  }, [controls]);

  const textVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1 },
    pulse: {
      opacity: 1,
      scale: [1, 1.1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <motion.svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M233.33 33.33H100c-11.05 0-20 8.95-20 20v293.34c0 11.05 8.95 20 20 20h200c11.05 0 20-8.95 20-20V116.67L233.33 33.33z" />
      <path d="M233.33 33.33v83.34h83.34" />
      <motion.circle
        cx="200"
        cy="200"
        r="40"
        strokeDasharray="251"
        strokeDashoffset="50"
        transform="rotate(-90 200 200)"
        animate={{
          rotate: [0, 900],
          opacity: [1, 1, 0],
        }}
        transition={{
          duration: 5,
          times: [0, 0.8, 1],
          ease: 'linear',
        }}
      />
      <motion.text
        x="200"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="1"
        fill="currentColor"
        fontSize="20"
        variants={textVariants}
        initial="hidden"
        animate={controls}
      >
        게시글이 없습니다
      </motion.text>
    </motion.svg>
  );
};

export default NoContentIcon;
