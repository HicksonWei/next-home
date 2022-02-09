import React from 'react'
import logoStyle from '../styles/components/Logo.module.scss'

// font-family: Reggae One
const Logo = () => {
  return (
    <div className="absolute top-[50%] left-[50%] w-[80%] min-w-[300px] max-w-[900px] translate-x-[-50%] translate-y-[-50%]">
      <svg
        className={logoStyle.logo}
        viewBox="0 0 655 92"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M55.296 87.224L5.952 56.216L55.296 25.304L56.064 25.976L27.36 56.312L56.064 86.648L55.296 87.224Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M74.7292 8.11999H92.2012L92.0092 16.952C94.7612 14.072 97.8332 11.896 101.225 10.424C104.617 8.88799 108.105 8.11999 111.689 8.11999C115.529 8.11999 119.049 9.01599 122.249 10.808C125.513 12.536 128.329 14.968 130.697 18.104C133.065 21.176 134.889 24.728 136.169 28.76C137.449 32.792 138.089 37.08 138.089 41.624C138.089 46.296 137.385 50.872 135.977 55.352C133.033 64.76 126.857 71.928 117.449 76.856C108.041 81.784 94.9852 84.248 78.2812 84.248L74.7292 8.11999ZM90.6652 78.872C100.009 75.8 107.049 72.184 111.785 68.024C116.521 63.864 119.465 59.832 120.617 55.928C121.641 52.408 122.153 48.6 122.153 44.504C122.153 40.216 121.609 36.12 120.521 32.216C119.433 28.312 117.897 25.08 115.913 22.52C113.993 19.96 111.785 18.52 109.289 18.2C107.945 18.008 106.633 17.912 105.353 17.912C103.113 17.912 100.873 18.2 98.6332 18.776C96.3932 19.288 94.1532 20.152 91.9132 21.368L90.6652 78.872Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M198.251 84.248C188.395 84.248 180.171 83.8 173.579 82.904C166.987 82.008 161.771 80.536 157.931 78.488C154.091 76.44 151.339 73.752 149.675 70.424C148.011 67.096 147.179 63.032 147.179 58.232C147.179 52.024 148.331 46.68 150.635 42.2C152.939 37.72 155.947 34.296 159.659 31.928C163.435 29.496 167.403 28.28 171.563 28.28C174.891 28.28 178.251 28.792 181.643 29.816C185.035 30.84 188.203 32.504 191.147 34.808C194.091 37.112 196.491 40.152 198.347 43.928C200.203 47.64 201.259 52.216 201.515 57.656L160.715 62.264C161.291 65.784 162.891 68.792 165.515 71.288C168.203 73.72 172.235 75.864 177.611 77.72C182.987 79.576 189.995 81.368 198.635 83.096L198.251 84.248ZM185.483 49.784C185.163 47.288 184.427 44.92 183.275 42.68C182.123 40.44 180.651 38.648 178.859 37.304C177.067 35.896 175.083 35.192 172.907 35.192C170.347 35.192 168.139 35.8 166.283 37.016C164.427 38.232 162.987 40.568 161.963 44.024C160.939 47.416 160.427 52.408 160.427 59C160.427 59.32 160.427 59.64 160.427 59.96C160.427 60.216 160.459 60.504 160.523 60.824L185.483 49.784Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M226.672 83L205.744 32.312L222.16 28.376L232.048 66.968L255.76 28.568H257.104L239.824 84.248L226.672 83Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M312.517 83L311.173 46.52L283.141 50.456L281.989 83H269.605L266.917 8.11999H284.677L283.621 37.784L311.077 42.68L309.829 8.11999H327.781L325.093 83H312.517Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M395.707 75.32C392.763 78.072 390.172 80.248 387.932 81.848C385.692 83.448 383.676 84.248 381.884 84.248C380.476 84.248 379.195 83.704 378.043 82.616C376.955 81.464 375.931 79.64 374.971 77.144C372.987 78.872 370.556 80.344 367.676 81.56C364.796 82.712 361.691 83.48 358.363 83.864C357.339 83.992 356.348 84.088 355.388 84.152C354.428 84.216 353.5 84.248 352.604 84.248C343.58 84.248 339.068 81.016 339.068 74.552C339.068 73.784 339.131 72.984 339.259 72.152C339.387 71.32 339.58 70.424 339.836 69.464C340.412 67.352 341.564 65.464 343.292 63.8C345.084 62.072 347.228 60.536 349.724 59.192C352.22 57.784 354.78 56.504 357.404 55.352C360.028 54.136 362.459 53.016 364.699 51.992C367.003 50.904 368.86 49.848 370.268 48.824C371.74 47.8 372.475 46.776 372.475 45.752C372.475 42.936 372.123 41.048 371.419 40.088C370.715 39.064 369.372 38.552 367.388 38.552C365.98 38.552 363.803 38.68 360.859 38.936C357.915 39.192 354.684 39.576 351.164 40.088C347.644 40.6 344.283 41.272 341.083 42.104L340.604 41.144C342.332 39.48 344.54 37.88 347.228 36.344C349.98 34.808 352.892 33.432 355.964 32.216C359.1 31 362.204 30.04 365.276 29.336C368.348 28.632 371.132 28.28 373.628 28.28C377.596 28.28 380.54 28.696 382.46 29.528C384.444 30.296 385.756 31.864 386.396 34.232C387.1 36.536 387.452 40.024 387.452 44.696V68.984C387.452 71.288 387.643 72.952 388.027 73.976C388.475 74.936 389.468 75.416 391.004 75.416C391.516 75.416 392.124 75.352 392.828 75.224C393.596 75.096 394.428 74.936 395.324 74.744L395.707 75.32ZM373.243 54.104C371.836 55.32 369.947 56.632 367.579 58.04C365.275 59.384 363.035 60.856 360.859 62.456C358.683 63.992 357.084 65.72 356.06 67.64C355.164 69.432 354.716 71 354.716 72.344C354.716 73.624 355.099 74.68 355.867 75.512C356.699 76.344 357.851 76.76 359.323 76.76C359.643 76.76 359.964 76.76 360.284 76.76C360.668 76.696 361.02 76.632 361.34 76.568C362.62 76.248 364.091 75.8 365.755 75.224C367.483 74.648 369.084 73.976 370.556 73.208C372.092 72.44 373.179 71.672 373.819 70.904L373.243 54.104Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M439.031 83L437.495 50.072C437.303 45.848 436.727 43.064 435.767 41.72C434.871 40.312 433.431 39.608 431.447 39.608C429.911 39.608 427.766 40.024 425.014 40.856C422.262 41.624 419.575 42.84 416.951 44.504L415.126 83H403.319L400.823 29.528H417.622L417.142 39.704C419.126 37.464 421.398 35.48 423.958 33.752C426.582 32.024 429.302 30.68 432.118 29.72C434.934 28.76 437.622 28.28 440.182 28.28C444.982 28.28 448.246 29.592 449.974 32.216C451.702 34.776 452.566 38.52 452.566 43.448C452.566 43.896 452.535 44.344 452.471 44.792C452.471 45.176 452.471 45.624 452.471 46.136L450.935 83H439.031Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M516.008 84.248L487.112 60.536L481.64 66.488L481.064 83H469.256L466.76 8.11999H483.56L482.024 55.064L497.48 28.28L514.184 31.16L496.52 50.36L516.968 84.248H516.008Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M551.087 88.568L576.143 3.79999L589.487 6.87199L552.335 88.568H551.087Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
        <path
          d="M599.413 87.224L598.645 86.552L627.349 56.312L598.645 25.976L599.413 25.304L648.757 56.216L599.413 87.224Z"
          stroke="white"
          strokeWidth="6"
          mask="url(#path-1-outside-1_4_6)"
        />
      </svg>
    </div>
  )
}

export default Logo