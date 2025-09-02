<script>

    // Student Data (You can fetch this from API or input form)

    const student = {

      college: "ABC College of Engineering",

      name: "John Doe",

      regNo: "12345678",

      course: "B.E Computer Science",

      year: "3rd Year",

      phone: "+91 9876543210",

      photo: "https://via.placeholder.com/120"

    };

    // Create ID card dynamically

    const card = `

      <div class="id-card">

        <div class="id-header">${student.college}</div>

        <div class="id-photo">

          <img src="${student.photo}" alt="Student Photo">

        </div>

        <div class="id-details">

          <p><b>Name:</b> ${student.name}</p>

          <p><b>Reg No:</b> ${student.regNo}</p>

          <p><b>Course:</b> ${student.course}</p>

          <p><b>Year:</b> ${student.year}</p>

          <p><b>Phone:</b> ${student.phone}</p>

        </div>

        <div class="id-footer">Principal’s Signature</div>

      </div>

    `;

    // Insert into container

    document.getElementById("container").innerHTML = card;

  </script>