import TacoBanner from "../components/TacoBanner";
import chipImg from "../images/BlueOnYellow-Logo.png";
import VisitUs from "../components/VisitUs";
import Footer from "../components/Footer";

function Menu() {
    return (
        <>
            <TacoBanner 
                pageTitle="Our Menu"
                pagePath="Home / Menu"
            />
            <div className="menu">
                <div className="menu-inner">
                    <div className="menu-items">
                        <div className="menu-section">
                            <div className="section-heading">
                                <h2>Tacos</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h5>Carne Asada Taco...............................$3.75</h5>
                                <h6>
                                    Grilled steak with cilantro, onions, and salsa verde served 
                                    on a flour or corn tortilla.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Al Pastor Taco......................................$3.75</h5>
                                <h6>
                                    Marinated pork with pineapple, onions, and cilantro served on a 
                                    flour or corn tortilla.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Grilled Chicken Taco...........................$3.50</h5>
                                <h6>
                                    Tender grilled chicken marinated in citrus and spices, topped with 
                                    fresh salsa, cilantro, and a squeeze of lime. Served on a flour or 
                                    corn tortilla.
                                </h6>
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="section-heading">
                                <h2>Quesadillas</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h5>Cheese Quesadilla............................$4.00</h5>
                                <h6>
                                    Flour tortilla filled with melted cheese, served with salsa verde 
                                    and sour cream.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Chicken Quesadilla...........................$5.00</h5>
                                <h6>
                                    Flour tortilla filled with shredded chicken, cheese, sautéed onions, 
                                    and peppers, served with salsa and sour cream.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Beef Quesadilla..................................$5.25</h5>
                                <h6>
                                    Flour tortilla filled with thinly sliced steak, cheese, sautéed onions, 
                                    and peppers, served with salsa and sour cream.
                                </h6>
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="section-heading">
                                <h2>Build-Your-Own-Taco</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h6>
                                    Flour or corn tortilla, cilantro, onions, and salsa verde or regular salsa. 
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Choice of:  ..........................................$3.50</h5>
                                <h6>
                                    Grilled chicken, chorizo, or plantain.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Or:  .......................................................$3.75</h5>
                                <h6>
                                    Carne Asada, Carnitas, or Al Pastor
                                </h6>
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="section-heading reference-point">
                                <h2>Kid’s Menu<img src={chipImg} width="60" height="auto" /></h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h5>Chip’s Taco Meal................................$6.25</h5>
                                <h6>
                                    A soft taco filled with ground beef or grilled chicken, shredded lettuce, 
                                    diced tomatoes, shredded cheese, and sour cream. Served with a side of Mexican 
                                    rice and black beans or nachos. Includes a small drink.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Chip’s Quesadilla Meal......................$6.75</h5>
                                <h6>
                                    A soft flour tortilla filled with ground beef or grilled chicken, melted cheese, 
                                    and salsa verde. Served with Mexican rice and black beans or nachos. Includes a 
                                    small drink.
                                </h6>
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="section-heading">
                                <h2>Sides</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h5>Mexican Rice.......................................$2.50</h5>
                            </div>
                            <div className="menu-option">
                                <h5>Black Beans........................................$2.00</h5>
                            </div>
                            <div className="menu-option">
                                <h5>Nacho Chips.......................................$3.25</h5>
                                <h6>
                                    Fresh tortilla chips topped with shredded cheese and warm queso.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Chips and Salsa.................................$2.75</h5>
                                <h6>
                                    Fresh tortilla chips with a side of salsa verde or regular salsa.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Side Salad...........................................$4.50</h5>
                                <h6>
                                    A  blend of crisp mixed greens, cherry tomatoes, cucumber slices, 
                                    and shredded carrots, tossed in a vinaigrette dressing or ranch.
                                </h6>
                            </div>
                        </div>
                        <div className="menu-section">
                            <div className="section-heading">
                                <h2>Beverages</h2>
                                <div className="heading-line"></div>
                            </div>
                            <div className="menu-option">
                                <h5>Iced Tea...............................................$2.50</h5>
                            </div>
                            <div className="menu-option">
                                <h5>Lemonade...........................................$2.50</h5>
                            </div>
                            <div className="menu-option">
                                <h5>Fountain Drink....................................$2.75</h5>
                                <h6>
                                    Coke, Diet Coke, Sprite, Fanta Orange, Dr Pepper,  or Hi-C Fruit Punch.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Horchata..............................................$3.25</h5>
                                <h6>
                                    A sweet and creamy rice-based drink with a hint of cinnamon.
                                </h6>
                            </div>
                            <div className="menu-option">
                                <h5>Mexican Hot Chocolate....................$3.25</h5>
                                <h6>
                                    A rich and creamy hot chocolate infused with authentic Mexican flavors, 
                                    including a hint of cinnamon and a touch of chili.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <VisitUs />
            <Footer />
        </>
    )
}

export default Menu;