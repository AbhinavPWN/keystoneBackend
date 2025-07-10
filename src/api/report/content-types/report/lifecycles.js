// Path: backend/src/api/report/content-types/report/lifecycles.js
module.exports = {
  async beforeCreate(event) {
    await validateReportFile(event.params.data);
  },

  async beforeUpdate(event) {
    await validateReportFile(event.params.data);
  },
};

async function validateReportFile(data) {
  // Skip if no File data
  if (!data.File || !data.File.connect) return;

  let fileId = null;

  // Handle single file (since multiple: false)
  if (data.File.connect?.id) {
    fileId = data.File.connect.id;
  }

  if (!fileId) return;

  // Fetch file metadata
  const file = await strapi.entityService.findOne('plugin::upload.file', fileId, {
    fields: ['id', 'mime', 'name'],
  });

  if (!file) {
    throw new Error(`⛔ Upload failed. File with ID ${fileId} not found.`);
  }

  // Allowed MIME types for File (PDF, Word, Excel)
  const allowedMimeTypes = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  if (!allowedMimeTypes.includes(file.mime)) {
    throw new Error(
      `⛔ Upload failed. Invalid file: ${file.name}
      Only PDF, Word, and Excel files are allowed for the File field.`
    );
  }
}