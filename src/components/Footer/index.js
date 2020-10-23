import React from 'react'
function Footer() {
    return (
        <>
            <footer id="footer">
                <section className="split contact">
                    <section>
                        <h3>Email</h3>
                        <p><a href="mailto:christophe.francois.correia@gmail.com?Subject=Hi there I want to contact you">christophe.francois.correia@gmail.com</a></p>
                    </section>
                    <section>
                        <h3>Social</h3>
                        <ul className="icons alt">
                            <li><a href="https://www.linkedin.com/in/christophe-fran%C3%A7ois-correia/" className="icon brands fa-linkedin" target="_blank" rel="noopener"><span className="label">Instagram</span></a></li>
                    <li><a href="https://github.com/christophefrancoiscorreia" className="icon brands fa-github" target="_blank" rel="noopener"><span className="label">GitHub</span></a></li>
                        </ul>
                    </section>
                </section>
            </footer>
            <div id="copyright">
                <ul><li>&copy; Christophe François Correia</li></ul>
            </div>
        </>
    )
}

export default Footer
