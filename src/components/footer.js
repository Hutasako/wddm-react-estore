import React from 'react';

const footer = () => {
    return (
        <footer class="page-footer">
        <ul class="social">
          <li><a href="#n"><span class="material-icons">face</span> Facebook</a></li>
          <li><a href="#n"><span class="material-icons">camera_alt</span> Instagram</a></li>
          <li><a href="#n"><span class="material-icons">alternate_email</span> Twitter</a></li>
        </ul>
        <nav aria-label="Legal">
          <ul class="legal">
            <li><a href="#n">Terms of Use</a></li>
            <li><a href="#n">Privacy Policy</a></li>
            <li><a href="#n">Accessibility Policy</a></li>
          </ul>
        </nav>
        <p class="copyright">&copy; Copyright, 1991.</p>
      </footer>
    )
}

export default footer;