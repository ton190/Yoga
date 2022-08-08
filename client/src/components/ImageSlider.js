import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../sass/components/_ImageSlider.scss";

export default function ImageSlier({ images }) {
	const [imageId, setImageId] = useState(0);

	function changeImage(i) {
		let l = images.length;
		setImageId((imageId + ((l + i) % l)) % l);
	}

	const imgStyle = {
		backgroundImage: "url(" + images[imageId].url + ")",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div className="ImageSlider">
			<AnimatePresence>
				<motion.div
					className="image"
					style={imgStyle}
					key={imageId}
					initial={{
						opacity: 0,
						transition: { duration: 0.25 },
					}}
					animate={{ opacity: 1, transition: { duration: 1.5 } }}
					exit={{
						opacity: 0,
						transition: { duration: 0.25 },
					}}
				/>
			</AnimatePresence>
			<div className="forward">
				<span onClick={() => changeImage(1)}>{">"}</span>
			</div>
			<div className="back">
				<span onClick={() => changeImage(-1)}>{"<"}</span>
			</div>
		</div>
	);
}