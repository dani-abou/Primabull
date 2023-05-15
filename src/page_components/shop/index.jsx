import { Alert, Snackbar } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { isMobile } from 'react-device-detect';
import { useCart } from "../../common/context";
import { BulkiBody1, BulkiH4, BulkiH5 } from "../../common/styles";
import BulkiButton from "../../components/BulkiButton/BulkiButton";
import BulkiSurface from "../../components/BulkiSurface";
import { PRODUCTS } from "../../data";
import {
  StyledAddToCart,
  StyledBackground, StyledBorder, StyledButtonChildDiv, StyledBuyButton, StyledContent, StyledDescLine, StyledGutterBorder, StyledPrice, StyledProduct, StyledProductImage
} from "./style";

const DEFAULT_HOVERS = Object.keys(PRODUCTS).reduce((accumulator, current) => ({ ...accumulator, [current]: false }), {})

export default function Shop() {

  const [hovered, setHovered] = useState();
  const [active, setActive] = useState();
  const { cart, increaseCart, decreaseCart, removeFromCart } = useCart();


  //If true, hover should be enabled
  const [triggerHover, setTriggerHover] = useState(false);

  const [buttonHovers, setButtonHovers] = useState({});

  const [snackbar, setSnackbar] = useState();

  const addToCart = useCallback((productKey, name) => {
    increaseCart(productKey);
    setSnackbar(name)
  }, [increaseCart, setSnackbar])

  const hoverButton = key => {
    setButtonHovers(prev => ({ ...prev, [key]: true }))
  }

  const unHoverButton = key => {
    setButtonHovers(prev => ({ ...prev, [key]: false }))
  }

  const toggleHover = index => {
    if (triggerHover) {
      setHovered(index)
    }
  }

  const toggleHoverTrigger = () => {
    if (!triggerHover) {
      setTriggerHover(true);
    }
    setHovered()
  }

  return <BulkiSurface>
    <BulkiH4 style={{ textAlign: 'center', marginTop: '10px' }}>
      Taste the Difference
    </BulkiH4>
    <br />
    <StyledBackground>
      {Object.keys(PRODUCTS).map((productKey, index) => {
        const product = PRODUCTS[productKey]
        return <StyledProduct
          key={index}
          onMouseOver={() => toggleHover(index)}
          onMouseLeave={() => toggleHoverTrigger()}
          onTouchStart={() => setActive(index)}
          onTouchEnd={() => setActive()}
          $hovered={index === hovered}
          $greyed={isMobile ? active !== undefined && index !== active : hovered !== undefined && index !== hovered}
        >
          <StyledBorder $index={index} $length={Object.keys(PRODUCTS).length} />
          <StyledGutterBorder $index={index} $length={Object.keys(PRODUCTS).length} />
          <StyledProductImage>
            <Image
              src={product.image}
              alt={product.image}
              layout='fill'
              objectFit="cover"
            />
          </StyledProductImage>
          <StyledContent>
            <br />
            <BulkiH5>{product.name}</BulkiH5>
            <br />
            {product.description.map((desc, i) => {
              return <div key={`${i}-${product.name}`}>
                <StyledDescLine $last={i === product.description.length - 1}>{desc}</StyledDescLine>
              </div>
            })}
            <br />
            <br />
            <br />


          </StyledContent>
          <StyledBuyButton
            size='large'
            onClick={() => addToCart(productKey, product.name)}
            onMouseOver={() => hoverButton(productKey)}
            onMouseOut={() => unHoverButton(productKey)}
          >
            <StyledButtonChildDiv>
              <StyledPrice $hovered={buttonHovers[productKey]}>
                ${product.price}
              </StyledPrice>
              <StyledAddToCart $hovered={buttonHovers[productKey]}>
                Add to Cart
              </StyledAddToCart>
            </StyledButtonChildDiv>
            {/* {buttonHovers[productKey] ? 'Add to Cart' : '$' + product.price} */}

          </StyledBuyButton>
        </StyledProduct>
      })}
    </StyledBackground>
    <Snackbar open={snackbar !== undefined} autoHideDuration={6000} onClose={() => setSnackbar()}>
      <Link href='/cart'>
        <Alert onClose={() => setSnackbar()} severity="success" sx={{ width: '100%' }}>
          {snackbar} added to cart!
        </Alert>
      </Link>
    </Snackbar>

  </BulkiSurface>
}

